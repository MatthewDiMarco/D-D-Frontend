import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  useQuery, gql
} from '@apollo/client';

import { Class, ClassSnapshot } from '../../model/models';
import ClassCard from '../../components/ClassCard';
import ClassDetail from '../../components/ClassDetail';

const ContainerFlexVertical = styled.div`
  display: flex;
  flex-direction: column;
`

const ContainerFlexHorizontal = styled.div`
  display: flex;
  flex-direction: row;
`

const ContainerLeft = styled.div`
  overflow: auto;
`

const ContainerRight = styled.div`
  overflow: auto;
  flex-grow: 1;
`

const ContainerGridList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill);
  grid-gap: 24px;
  padding: 16px;
  max-height: 90vh;
`

const ContainerDetail = styled.div`
  max-height: 90vh;
`

const Info = styled.h1`
  margin: 25vh;
  text-align: center;
`

const Label = styled.div`
  margin: 20px 10px;
  font-weight: bold;
`

const GET_CLASSES = gql`
  query GetClasses {
    classes {
      index
      name
      url
      hit_die
    }
  }
`

const GET_SELECTED_CLASS_DETAILS = gql`
  query GetSelectedClass($classIndex: String!) {
    classes (filter: { index: $classIndex }) {
      index
      name
      hit_die
      proficiencies {
        name
      }
      starting_equipment {
        equipment {
          name
        }
      }
    }
  }
`

const GET_CLASS_SPELLS = gql`
  query Levels($levelIndex: String!) {
    levels (filter: { index: $levelIndex }) {
      level
      spellcasting {
        spells_known
      }
    }
  }
`

interface GetClassesResponseType {
  classes: ClassSnapshot[]
};

interface GetSelectedClassDetailsResponseType {
  classes: Class[]
};

interface GetClassSpells {
  levels: { 
    level: number,
    spellcasting: {
      spells_known: number
    }
  }[]
}

const NUM_LEVELS = 20;

interface ClassSelectLayoutProps {};

const ClassSelect: React.FC<ClassSelectLayoutProps> = () => {
  const [selectedClassIndex, setSelectedClassIndex] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<number>(20);

  const {
    loading: loadingClasses,
    error: errorClasses,
    data: dataClasses
  } = useQuery<GetClassesResponseType>(GET_CLASSES);

  const {
    loading: loadingDetail, 
    data: dataDetail
  } = useQuery<GetSelectedClassDetailsResponseType>(GET_SELECTED_CLASS_DETAILS, {
    variables: { classIndex: selectedClassIndex },
    fetchPolicy: 'no-cache'
  });

  const {
    loading: loadingSpells, 
    data: dataSpells
  } = useQuery<GetClassSpells>(GET_CLASS_SPELLS, {
    variables: { levelIndex: `${selectedClassIndex}-${selectedLevel}` },
    fetchPolicy: 'no-cache'
  });

  console.log(dataSpells);

  if (loadingClasses) return <Info>Loading...</Info>
  if (errorClasses) return <Info>An unexpected error occured</Info>

  return (
    <ContainerFlexHorizontal>
      <ContainerLeft>
        <ContainerGridList>
          {dataClasses?.classes.map((cls: ClassSnapshot, idx: number) => {
            return (
              <ClassCard 
                key={idx}
                propClassSnapshot={cls}
                propSelected={selectedClassIndex === cls.index}
                propHandleClick={(selectedIndex: string) => {
                  setSelectedClassIndex(selectedIndex);
                }}
              />
            );
          })}
        </ContainerGridList>
      </ContainerLeft>
      <ContainerRight>
        <ContainerFlexVertical>
          <ContainerDetail>
            <div>
              <Label>
                <span>Select Level: </span>
                <select 
                  value={selectedLevel}
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) => { 
                    setSelectedLevel(parseInt(event.target.value));
                  }}
                >
                  {Array.from(Array(NUM_LEVELS).keys()).map((level: number) => {
                    return <option value={level+1}>{level+1}</option>
                  })}
                </select>
              </Label>
            </div>
            {loadingDetail || loadingSpells
              ? <ClassDetail 
                  classDetail={undefined} 
                  spellsCastable={-1}
                  level={-1}
                  customTitle="Loading..." 
                />
              : <ClassDetail 
                  classDetail={dataDetail?.classes[0]} 
                  spellsCastable={dataSpells?.levels[0]?.spellcasting.spells_known}
                  level={dataSpells?.levels[0]?.level}
                  customTitle="No Class Selected" 
                />}
          </ContainerDetail>
        </ContainerFlexVertical>
      </ContainerRight>
    </ContainerFlexHorizontal>
  );
};

export default ClassSelect;