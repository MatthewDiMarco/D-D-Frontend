import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  useQuery,
  gql
} from '@apollo/client'

import ClassDetail from '../component/ClassDetail';
import ClassSelect from '../component/ClassSelect';
import { Class, ClassSnapshot } from '../../model/models';

const ContainerFlex = styled.div`
  display: flex;
`

const ContainerLeft = styled.div`
  overflow: auto;
`

const ContainerRight = styled.div`
  flex-grow: 1;
`

const Loading = styled.h1`
  margin: 25vh;
  text-align: center;
`

const GET_CLASSES = gql`
  query GetClasses {
    classes {
      index
      name
      hit_die
      url
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

const LandingScreen: React.FC = () => {
  const [selectedClassIndex, setSelectedClassIndex] = useState<string>('');
  const [classList, setClassList] = useState<ClassSnapshot[]>([]);
  const [classDetail, setClassDetail] = useState<Class | undefined>(undefined);
  const [loadingDetail, setLoadingDetail] = useState<boolean>(false);

  const { 
    loading: loadingClasses, 
    error: errorClasses, 
  } = useQuery(GET_CLASSES, { 
    skip: classList.length > 0,
    onCompleted: (data) => {
      setClassList(parseClassList(data))
    }
  });

  const {} = useQuery(GET_SELECTED_CLASS_DETAILS, {
    variables: { classIndex: selectedClassIndex },
    skip: !loadingDetail,
    onCompleted: (data) => {
      setLoadingDetail(false);
      setClassDetail(parseSelectedClassDetail(data));
    }
  });

  const handleSelectClass = (selectedIndex: string) => {
    setSelectedClassIndex(selectedIndex);
    setLoadingDetail(true);
    console.log('set loading true');
  };

  const parseClassList = (data: any): ClassSnapshot[] => {
    return data.classes.map((cls: any, idx: number): ClassSnapshot => {
      return {
        classIndex: cls.index,
        className: cls.name,
        classHitDie: cls.hit_die,
        classEndpoint: cls.url
      };
    });
  };

  const parseSelectedClassDetail = (data: any): Class | undefined => {
    if (selectedClassIndex == '') {
      return undefined;
    }

    const cls = data.classes[0];
    console.log(cls);

    return {
      className: cls.name,
      classHitDie: cls.hit_die,
      classEndpoint: cls.url,
      classProficiencies: cls.proficiencies.map((pp: any) => {
        return pp.name;
      }),
      classStartingEquipment: cls.starting_equipment.map((ee: any) => {
        return ee.equipment.name;
      })
    };
  };

  if (loadingClasses) return <Loading>Loading...</Loading>
  if (errorClasses) return <div>An unexpected error occured</div>

  return (
    <ContainerFlex>
      <ContainerLeft>
        <ClassSelect
          propHandleSelectClass={handleSelectClass}
          propClassList={classList}
          propSelectedIndex={selectedClassIndex}
        />
      </ContainerLeft>
      <ContainerRight>
        <ClassDetail
          propClassDetails={classDetail}
        />
      </ContainerRight>
    </ContainerFlex>
  );
};

export default LandingScreen;