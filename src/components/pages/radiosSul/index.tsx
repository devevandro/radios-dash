import TabsComponent from '@/components/tabsComponent';

export default function RadiosSulComponent() {
  const states = [
    {
      id: 0,
      label: 'Paraná',
      name: 'parana',
      region: 'south'
    },
    {
      id: 1,
      label: 'Santa Catarina',
      name: 'santaCtarina',
      region: 'south'
    },
    {
      id: 2,
      label: 'Rio Grande do Sul',
      name: 'rioGrandeDoSul',
      region: 'south'
    }
  ];
  return (
    <TabsComponent states={states} />
  );
}