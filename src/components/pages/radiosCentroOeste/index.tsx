import TabsComponent from '@/components/tabsComponent';

export default function RadiosCentroOesteComponent() {
  const states = [
    {
      id: 0,
      label: 'Mato Grosso',
      name: 'matoGrosso',
      region: 'midlewest'
    },
    {
      id: 1,
      label: 'Mato Grosso do Sul',
      name: 'matoGrossoDoSul',
      region: 'midlewest'
    },
    {
      id: 2,
      label: 'Goiás',
      name: 'goias',
      region: 'midlewest'
    },
    {
      id: 3,
      label: 'Distrito Federal',
      name: 'distritoFederal',
      region: 'midlewest'
    }
  ];
  return (
    <TabsComponent states={states} />
  );
}