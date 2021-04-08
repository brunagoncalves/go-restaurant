import { useEffect, useState } from 'react';

import { Food } from '../../components/Food';
import { Header } from '../../components/Header';
import { ModalAddFood } from '../../components/ModalAddFood';
import { ModalEditFood } from '../../components/ModalEditFood';
import { api } from '../../services/api';

import { DashboardContainer } from './styles';

interface FoodType {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

type FoodInput = Omit<FoodType, 'id' | 'available'>;

export function Dashboard() {
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [editingFood, setEditingFood] = useState({} as FoodType);
  const [modalOpenAdd, setModalOpenAdd] = useState(false);
  const [modalOpenEdit, setModalOpenEdit] = useState(false);

  async function handleNewFood(food: FoodInput) {
    const response = await api.post('/foods', {
      ...food,
      available: true,
    });

    setFoods([...foods, response.data]);
  }

  async function handleUpdateFood(food: FoodInput) {
    try {
      const foodUpdated = await api.put(`/foods/${editingFood.id}`, {
        ...editingFood,
        ...food,
      });

      const foodsUpdated = foods.map(f =>
        f.id !== foodUpdated.data.id ? f : foodUpdated.data,
      );

      setFoods(foodsUpdated);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteFood(id: number) {
    await api.delete(`/foods/${id}`);

    const foodsFiltered = foods.filter(food => food.id !== id);

    setFoods(foodsFiltered);
  }

  function toggleModalAdd() {
    setModalOpenAdd(!modalOpenAdd);
  }

  function toggleModalEdit() {
    setModalOpenEdit(!modalOpenEdit);
  }

  function handleEditFood(food: FoodType) {
    setEditingFood(food);
    setModalOpenEdit(true);
  }

  useEffect(() => {
    async function loadFoods() {
      const response = await api.get('foods');

      setFoods(response.data);
    }
    loadFoods();
  }, []);

  return (
    <>
      <Header openModalAddFood={toggleModalAdd} />

      <ModalAddFood
        isOpen={modalOpenAdd}
        onRequestClose={toggleModalAdd}
        handleNewFood={handleNewFood}
      />

      <ModalEditFood
        isOpen={modalOpenEdit}
        onRequestClose={toggleModalEdit}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <DashboardContainer>
        {foods.map(food => (
          <Food
            key={food.id}
            food={food}
            handleEditFood={handleEditFood}
            handleDeleteFood={handleDeleteFood}
          />
        ))}
      </DashboardContainer>
    </>
  );
}
