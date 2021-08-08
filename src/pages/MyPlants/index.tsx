import React, { useEffect, useState }  from 'react';
import { Header } from '../../components/Header';

import waterdrop from '../../assets/waterdrop.png'

import {
 Container,
 Spotlight,
 SpotlightImage,
 SpotlightTitle,
 Plants,
 PlantsTitle,
 Text,
} from './styles';

import { FlatList } from 'react-native';
import { PlantProps, loadPlant } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale'
import { PlantCardSecondary } from '../../components/PlantCardSecondary';

export function MyPlants(){
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState<string>();

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant() 
      
      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatered(
        `Não esqueça de regar a ${plantsStoraged[0].name} à aproximadamente ${nextTime} horas.`
      )

      setMyPlants(plantsStoraged);
      setLoading(false)
    }
    
    loadStorageData();

  },[])

 return (
   <Container>
     <Header />
     <Spotlight>

       <SpotlightImage 
        source={waterdrop}
       />

       <SpotlightTitle>
         {nextWatered}
       </SpotlightTitle>
     </Spotlight>

     <Plants>
       <PlantsTitle>
         Próximas regadas
       </PlantsTitle>

       <FlatList 
        data={myPlants}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PlantCardSecondary
            data={item}
          />
        )}
        showsVerticalScrollIndicator={false}
       />
     </Plants>

   </Container>
 );
}