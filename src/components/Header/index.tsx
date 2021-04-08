import { FiPlusSquare } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { HeaderContainer } from './styles';

interface HeaderProps {
  openModalAddFood: () => void;
}

export function Header({ openModalAddFood }: HeaderProps) {
  return (
    <HeaderContainer>
      <header>
        <img src={logoImg} alt="GoRestaurant" />

        <nav>
          <button type="button" onClick={openModalAddFood}>
            <div className="text">Novo Prato</div>
            <div className="icon">
              <FiPlusSquare size={20} />
            </div>
          </button>
        </nav>
      </header>
    </HeaderContainer>
  );
}
