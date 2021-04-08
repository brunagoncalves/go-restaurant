import { FormHandles } from '@unform/core';
import { useRef } from 'react';
import { FiSave } from 'react-icons/fi';

import { Input } from '../Input';
import { Modal } from '../Modal';
import { Form } from './styles';

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

type FoodInput = Omit<Food, 'id' | 'available'>;

interface ModalEditFoodProps {
  isOpen: boolean;
  onRequestClose: () => void;
  editingFood: Food;
  handleUpdateFood: (food: FoodInput) => void;
}

export function ModalEditFood({
  isOpen,
  onRequestClose,
  editingFood,
  handleUpdateFood,
}: ModalEditFoodProps) {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: any) {
    handleUpdateFood(data);
    onRequestClose();
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar prato</h1>

        <Input name="image" placeholder="Cole o link aqui" />
        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" type="number" />
        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="icon">
            <FiSave size={20} />
          </div>
          <div className="text">Salvar</div>
        </button>
      </Form>
    </Modal>
  );
}
