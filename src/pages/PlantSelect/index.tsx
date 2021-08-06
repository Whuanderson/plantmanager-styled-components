import React, { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Load } from '../../components/Load';

import { FlatList, ActivityIndicator } from 'react-native';
import api from '../../services/api';


import {
  Container,
  Title,
  Subtitle,
  HeaderStyle,
  ButtonsList,
  CardList,
} from './styles';
import { theme } from '../../global/styles/theme';

interface EnviromentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}


export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

   function handleEnvironmentsSelected(environment: string) {
    setEnvironmentSelected(environment);

    if (environment === 'all')
      return setFilteredPlants(plants);

    const filtered = plants.filter(plant =>
      plant.environments.includes(environment)
    );

    setFilteredPlants(filtered)
  }

  async function fetchPlants() {
    const { data } = await api
      .get(`plants?_sort=name&_order=asc&page=${page}&_limit=10`);
    if (!data)
      return setLoading(true);

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);
  }

/*   function handleFetchMore(distance: number) {
    if (distance < 1)
      return;

    setLoadingMore(true)
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  } */

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api
        .get('plants_environments?_sort=title&_order=asc')
      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data
      ]);
    }
    fetchEnvironment();
  }, [])

  useEffect(() => {
    fetchPlants();
  }, [])

  if (loading)
    return <Load />

  return (
    <Container>
      <HeaderStyle>
        <Header />

        <Title>
          Em qual ambiente
        </Title>
        <Subtitle>
          você quer colocar sua planta?
        </Subtitle>
      </HeaderStyle>

      <ButtonsList>
        <FlatList
          data={environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentsSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ height: 40, justifyContent: 'center', paddingBottom: 5, marginLeft: 32, marginVertical: 32 }}
        />
      </ButtonsList>

      <CardList>
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={item}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
    /*       onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          } */
          ListFooterComponent={
            loadingMore 
            ? <ActivityIndicator color={theme.colors.heading} />
            : <></>
          }
        />

      </CardList>

    </Container>
  );
}