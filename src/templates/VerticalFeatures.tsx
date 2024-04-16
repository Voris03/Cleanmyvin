import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="О НАС"
    description="Cleanmyvin.com специализируется на сборе информации об автомобилях с аукционов Copart и IAAI. Мы предоставляем подробную информацию обо всех автомобилях, представленных на аукционах."
  >
    <VerticalFeatureRow
      title="УСЛУГИ ПО УДАЛЕНИЮ ИСТОРИИ АВТОМОБИЛЯ"
      description="Если вы хотите удалить информацию о своем автомобиле, приобретенном на аукционе, мы можем вам помочь. Наша услуга по очистке истории автомобиля поможет сохранить его стоимость и обеспечить конфиденциальность."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="ПРОЦЕСС ЗАКАЗА УСЛУГИ"
      description="Чтобы воспользоваться нашим сервисом, оставьте заявку на бесплатную консультацию или воспользуйтесь формой поиска по VIN-номеру, чтобы заказать удаление информации о вашем автомобиле. Мы гарантируем оперативное удаление доступной информации и фотографий вашего транспортного средства из поисковых систем."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Оставьте заявку"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
