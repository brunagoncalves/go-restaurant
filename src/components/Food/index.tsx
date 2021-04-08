import { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { api } from '../../services/api';

import { FoodContainer } from './styles';

interface FoodType {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

interface FoodProps {
  food: FoodType;
  handleEditFood: (food: FoodType) => void;
  handleDeleteFood: (id: number) => void;
}

export function Food({ food, handleEditFood, handleDeleteFood }: FoodProps) {
  const [isAvailable, setIsAvailable] = useState(food.available);

  async function toggleAvailable() {
    await api.put(`foods/${food.id}`, { ...food, available: !isAvailable });

    setIsAvailable(!isAvailable);
  }

  function setEditingFood() {
    handleEditFood(food);
  }

  return (
    <FoodContainer available={isAvailable}>
      <header>
        <img src={food.image} alt={food.name} />
      </header>

      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">
          R$
          <b>
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(food.price)}
          </b>
        </p>
      </section>

      <section className="footer">
        <div className="icon-container">
          <button type="button" onClick={setEditingFood}>
            <FiEdit size={20} />
          </button>
          <button type="button" onClick={() => handleDeleteFood(food.id)}>
            <FiTrash2 size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch">
            <input
              type="checkbox"
              id={`available-switch-${food.id}`}
              checked={isAvailable}
              onChange={toggleAvailable}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </FoodContainer>
  );
}
