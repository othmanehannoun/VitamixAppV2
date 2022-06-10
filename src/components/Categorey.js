import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity , Image} from 'react-native';
import { PRIMARY_COLOR, WHITE, YELLOW_COLOR } from '../constants/StyleColor';
import { windowHeight } from '../constants/Demonsions';
import { endPoint } from '../constants/GlobaleVariables';


const Item = ({ data, onPress}) => (
    
  <>
   <TouchableOpacity style={styles.box}
    onPress= {()=>onPress(data._id)}
   >
        <View style={styles.item}>
            <Image 
            source={{
              uri: `${endPoint}/${data.img}`,
            }}

              style={{width:100, 
              height: 100, 
              resizeMode: 'contain'
            }}
            />
            <Text style={{
              marginBottom: 10,
              fontSize: 18, 
              fontWeight: 'bold',
              textTransform: 'uppercase'
              }}
            >
              {data.name}
            </Text>
        </View>

   </TouchableOpacity>
   </>
);

const Categorey = ({onPress, category}) => {
  const renderItem = ({ item, key }) => (
    
    <Item
     data={item}
     onPress = {onPress} 
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={category}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.65
  },
  box: {
    width: '50%',
    justifyContent: 'center',
    alignItem: 'center',
    borderRadius: 20,
    padding: 15
  },
  item: {
    flex: 1,
    justifyContent:'center', 
    alignItems:'center',
    borderRadius: 20,
    borderColor: PRIMARY_COLOR,
    borderWidth: 2,
   
  },
  title: {
    fontWeight: 'bold',
    color: WHITE,
  },
});

export default Categorey;
