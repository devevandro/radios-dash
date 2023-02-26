import TabsComponent from '../../tabsComponent';

export default function RadiosNordesteComponent() {
  const states = [
    {
      id: 0,
      label: 'Alagoas',
      name: 'alagoas',
      region: 'northeast'
    },
    {
      id: 1,
      label: 'Bahia',
      name: 'bahia',
      region: 'northeast'
    },
    {
      id: 2,
      label: 'Ceará',
      name: 'ceara',
      region: 'northeast'
    },
    {
      id: 3,
      label: 'Maranhão',
      name: 'maranhao',
      region: 'northeast'
    },
    {
      id: 4,
      label: 'Paraíba',
      name: 'paraiba',
      region: 'northeast'
    },
    {
      id: 5,
      label: 'Piauí',
      name: 'piaui',
      region: 'northeast'
    },
    {
      id: 6,
      label: 'Pernambuco',
      name: 'pernambuco',
      region: 'northeast'
    },
    {
      id: 7,
      label: 'Rio Grande do Norte',
      name: 'rioGrandeNorte',
      region: 'northeast'
    },
    {
      id: 8,
      label: 'Sergipe',
      name: 'sergipe',
      region: 'northeast'
    }
  ];
  return (
    <TabsComponent states={states} />
  );
}