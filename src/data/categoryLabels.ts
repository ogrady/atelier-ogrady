export const german: {[key: string]: string} = {
  painting: 'Malereien',
  sculpture: 'Skulpturen',
  drawing: 'Zeichnungen',
  foreign: 'Schülerarbeiten'
};

export const toGerman = (label: string) => german[label] ?? label
