import TabsComponent from '../../tabsComponent';

export default function RadiosNorteComponent() {
  const states = [
    {
      id: 0,
      label: 'Amazonas',
      name: 'amazonas',
      region: 'north'
    },
    {
      id: 1,
      label: 'Acre',
      name: 'acre',
      region: 'north'
    },
    {
      id: 2,
      label: 'Amapá',
      name: 'amapa',
      region: 'north'
    },
    {
      id: 3,
      label: 'Pará',
      name: 'para',
      region: 'north'
    },
    {
      id: 4,
      label: 'Rondônia',
      name: 'rondonia',
      region: 'north'
    },
    {
      id: 5,
      label: 'Roraima',
      name: 'roraima',
      region: 'north'
    },
    {
      id: 6,
      label: 'Tocantins',
      name: 'tocantins',
      region: 'north'
    }
  ];
  return (
    <TabsComponent states={states} />
  );
}