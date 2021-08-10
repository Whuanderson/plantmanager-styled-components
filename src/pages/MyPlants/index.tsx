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

import { FlatList, Alert } from 'react-native';
import { PlantProps, loadPlant, removePlant } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale'
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { Load } from '../../components/Load';

export function MyPlants(){
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState<string>();

  function handleRemove(plant:PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`,[
      {
        text:'Não',
        style: 'cancel'
      },
      {
        text:'Sim',
        onPress: async () => {
          try { 
            await removePlant(plant.id)
            setMyPlants((oldData) => 
              oldData.filter((item) => item.id !== plant.id)
             );

          } catch(error) {
            Alert.alert('Não foi possível remover! ')

          }
        }
      },
    ])
  }

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant() 
      
      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatered(
        `Não esqueça de regar a ${plantsStoraged[0].name} em aproximadamente ${nextTime}.`
      )

      setMyPlants(plantsStoraged);
      setLoading(false)
    }
    
    loadStorageData();

  },[])

  if (loading)
  return <Load />

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
            handleRemove={() => {handleRemove(item)}}
          />
        )}
        showsVerticalScrollIndicator={false}
       />
     </Plants>

   </Container>
 );
}