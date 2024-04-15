import type { ReactNode } from 'react';
import { Button } from './style';


type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900" style={{ wordSpacing: '1px' }}>
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl">{props.description}</div>

    <div style={{ color: "black" }}></div>  
    
    <Button>
      {props.button}
    </Button>
  </header>
);

export { HeroOneButton };
