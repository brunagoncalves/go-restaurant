import { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiSave } from 'react-icons/fi';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import { Input } from '../Input';
import { Modal } from '../Modal';

import { Form } from './styles';

interface Food {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ModalAddFoodProps {
  isOpen: boolean;
  onRequestClose: () => void;
  handleNewFood: (food: Food) => void;
}

export function ModalAddFood({
  isOpen,
  onRequestClose,
  handleNewFood,
}: ModalAddFoodProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: Food) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          image: Yup.string().required('Imagem obrigatória'),
          name: Yup.string().required('Nome obrigatório'),
          description: Yup.string().required('Descrição obrigatório'),
          price: Yup.number().required(),
        });

        await schema.validate(data, { abortEarly: false });

        handleNewFood(data);
        onRequestClose();
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [handleNewFood, onRequestClose],
  );

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>

        <Input name="image" placeholder="Cole o link aqui" />
        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" type="number" placeholder="Ex: 19.90" />
        <Input name="description" placeholder="Descrição" />

        <button type="submit">
          <div className="icon">
            <FiSave size={20} />
          </div>
          <p className="text">Salvar</p>
        </button>
      </Form>
    </Modal>
  );
}
