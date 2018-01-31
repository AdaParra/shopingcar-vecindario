<template>
    <Card :coches='vehiculos'></Card>
</template>

<script>

import Card from './card'

export default {
  name: 'mainCards',
  data () {
    return {
      vehiculos: [
        { id: 0, marca: 'CITROEN', modelo: 'C-Crosser 2.2', año: '2011', km: '80890', transmicion: 'Automático', caracteristicas: [ { name: 'Volante Multifunción' }, { name: 'Aire Acondicionado' }, { name: 'Control de Curcero' }, { name: 'Levas en el volante' }, { name: 'Reposabrazos Central' }, { name: 'Sensores de Parking Traceros' }, { name: 'Barras Longitudinales en el Techo' }, { name: 'Llantas de Aleación' } ], descripcion: 'En perfecto estado, se entrega con revisión completa, cambio de aceites y filtros todo nuevo, 1 año de garantia te lo financiamos sin entrada.', precio: '12.990,00€', image: require('./assets/Citroen2011/coche1.png'), imageDetail: [ { src: require('./assets/Citroen2011/CITROEN2011_1.jpg') }, { src: require('./assets/Citroen2011/CITROEN2011_2.jpg') }, { src: require('./assets/Citroen2011/CITROEN2011_3.jpg') }, { src: require('./assets/Citroen2011/CITROEN2011_4.jpg') }, { src: require('./assets/Citroen2011/CITROEN2011_5.jpg') } ] },
        { id: 1, marca: 'OPEL', modelo: 'Corsa 1.3', año: '2013', km: '7200', transmicion: 'Manual', caracteristicas: [ { name: 'Volante Multifunción' }, { name: 'Aire Acondicionado' }, { name: 'Llantas de Aleación' }, { name: 'Anclaje Isofix' }, { name: 'Diesel' } ], descripcion: 'En perfecto estado, se entrega con revisión completa, cambio de aceites y filtros todo nuevo, 1 año de garantia te lo financiamos sin entrada.', precio: '6.300,00€', imageDetail: [ { src: require('./assets/Opel2013/OPEL2013_1.jpg') }, { src: require('./assets/Opel2013/OPEL2013_2.jpg') }, { src: require('./assets/Opel2013/OPEL2013_3.jpg') }, { src: require('./assets/Opel2013/OPEL2013_4.jpg') }, { src: require('./assets/Opel2013/OPEL2013_5.jpg') } ], image: require('./assets/Opel2013/OPEL2013_1.jpg') },
        { id: 2, marca: 'CITROEN', modelo: 'C4', año: '2015', km: '38019', transmicion: 'Automatico', descripcion: 'En perfecto estado, se entrega con revisión completa, cambio de aceites y filtros todo nuevo, 1 año de garantia te lo financiamos sin entrada.', precio: '11.600,00€', caracteristicas: [ { name: 'Volante Multifunción' }, { name: 'Aire Acondicionado' }, { name: 'Llantas de Aleación' }, { name: 'Anclaje Isofix' }, { name: 'Diesel' } ], imageDetail: [ { src: require('./assets/Citroen2015/CITROEN2015_1.jpg') }, { src: require('./assets/Citroen2015/CITROEN2015_2.jpg') }, { src: require('./assets/Citroen2015/CITROEN2015_3.jpg') }, { src: require('./assets/Citroen2015/CITROEN2015_5.jpg') }, { src: require('./assets/Citroen2015/CITROEN2015_4.jpg') } ], image: require('./assets/Citroen2015/CITROEN2015_1.jpg') },
        { id: 3, marca: 'AUDI', modelo: 'A5', año: '2010', km: '97587', transmicion: 'Manual', caracteristicas: [ { name: 'Volante Multifunción' }, { name: 'Aire Acondicionado' }, { name: 'Llantas de Aleación' }, { name: 'Anclaje Isofix' }, { name: 'Diesel' } ], descripcion: 'En perfecto estado, se entrega con revisión completa, cambio de aceites y filtros todo nuevo, 1 año de garantia te lo financiamos sin entrada.', precio: '22.900,00€', imageDetail: [ { src: require('./assets/Audi2010/AUDI_1.png') }, { src: require('./assets/Audi2010/AUDI_2.png') }, { src: require('./assets/Audi2010/AUDI_3.png') }, { src: require('./assets/Audi2010/AUDI_4.png') }, { src: require('./assets/Audi2010/AUDI_2.png') } ], image: require('./assets/Audi2010/AUDI_1.png') },
        { id: 4, marca: 'CITROEN', modelo: 'C-Crosser 2.2', año: '2011', km: '80890', transmicion: 'Automático', caracteristicas: [ { name: 'Volante Multifunción' }, { name: 'Aire Acondicionado' }, { name: 'Llantas de Aleación' }, { name: 'Anclaje Isofix' }, { name: 'Diesel' } ], descripcion: 'En perfecto estado, se entrega con revisión completa, cambio de aceites y filtros todo nuevo, 1 año de garantia te lo financiamos sin entrada.', precio: '12.990,00€', image: require('./assets/Citroen2011/coche1.png') },
        { id: 5, marca: 'CITROEN', modelo: 'C4', año: '2015', km: '38019', transmicion: 'Automatico', descripcion: 'En perfecto estado, se entrega con revisión completa, cambio de aceites y filtros todo nuevo, 1 año de garantia te lo financiamos sin entrada.', precio: '11.600,00€', caracteristicas: [ { name: 'Volante Multifunción' }, { name: 'Aire Acondicionado' }, { name: 'Llantas de Aleación' }, { name: 'Anclaje Isofix' }, { name: 'Diesel' } ], image: require('./assets/Citroen2015/CITROEN2015_1.jpg') },
        { id: 6, marca: 'OPEL', modelo: 'Corsa 1.3', año: '2013', km: '7200', transmicion: 'Manual', caracteristicas: [ { name: 'Volante Multifunción' }, { name: 'Aire Acondicionado' }, { name: 'Llantas de Aleación' }, { name: 'Anclaje Isofix' }, { name: 'Diesel' } ], descripcion: 'En perfecto estado, se entrega con revisión completa, cambio de aceites y filtros todo nuevo, 1 año de garantia te lo financiamos sin entrada.', precio: '6.300,00€', image: require('./assets/Opel2013/OPEL2013_1.jpg') },
        { id: 7, marca: 'AUDI', modelo: 'A5', año: '2010', km: '97587', transmicion: 'Manual', caracteristicas: [ { name: 'Volante Multifunción' }, { name: 'Aire Acondicionado' }, { name: 'Llantas de Aleación' }, { name: 'Anclaje Isofix' }, { name: 'Diesel' } ], descripcion: 'En perfecto estado, se entrega con revisión completa, cambio de aceites y filtros todo nuevo, 1 año de garantia te lo financiamos sin entrada.', precio: '22.900,00€', image: require('./assets/Audi2010/AUDI_1.png') }
      ]
    }
  },
  components: {
    Card
  }
}
</script>
