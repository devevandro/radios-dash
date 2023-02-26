import TabsComponent from '@/components/tabsComponent';

export default function RadiosSudesteComponent() {
  const states = [
    {
      id: 0,
      label: 'São Paulo',
      name: 'saoPaulo',
      region: 'southeast'
    },
    {
      id: 1,
      label: 'Minas Gerais',
      name: 'minasGerais',
      region: 'southeast'
    },
    {
      id: 2,
      label: 'Espirito Santo',
      name: 'espiritoSanto',
      region: 'southeast'
    },
    {
      id: 3,
      label: 'Rio de Janeiro',
      name: 'rioDeJaneiro',
      region: 'southeast'
    }
  ];
  return (
    <TabsComponent states={states} />
  );
}