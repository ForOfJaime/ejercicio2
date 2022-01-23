import * as React from 'react';
import { Text, View, FlatList, Image, ScrollView } from 'react-native';

export const HomeScreen = ({ navigation }) =>{  
        const [fruits, setFruits] = useState(null);
      
      
        useEffect(() => {
          fetch("http://10.0.2.2:8080/fruits")
            .then(reponse => reponse.json())
            .then((reponseJson) => {
                setFruits(reponseJson);
            })
            .catch(error => console.log(error));
        }, [])
      
      
        const renderItem = ({ item }) => (
          console.log("render", item),
      
          <ScrollView>
            <View>
              <View style={{ alignItems: 'center' }}>
                {item.name === "Piña" ?
      
                  <Image style={{ width: 150, height: 150, marginTop: 20 }}
                    source={require('../imagenes/piña.png')} /> : null}
                {item.name === "fresas" ?
      
      
                  <Image style={{ height: 200, width: 200, marginTop: 20 }}
                    source={require('../imagenes/fresas.png')} /> : null}
                {item.name === "Peras" ?
      
                  <Image style={{ width: 170, height: 220, marginTop: 20 }}
                    source={require('../imagenes/pera.png')} /> : null}
                {item.name === "Manzana" ?
      
                  <Image style={{ width: 150, height: 150, marginTop: 20 }}
                    source={require('../imagenes/manzana.png')} /> : null}
                {item.name === "Uvas" ?
      
                  <Image style={{ width: 150, height: 150, marginTop: 20 }}
                    source={require('../imagenes/uvas.png')} /> : null}
      
              </View>
      
              <View><Text style={styles.textos}>{item.name}</Text></View>
              <View><Text style={styles.textos}>El precio es: {item.price}</Text></View>
              <View
                style={{
                  borderBottomColor: 'blue',
                  borderBottomWidth: 1,
                  padding: 10
                }}
              />
            </View>
          </ScrollView>
      
        );
      
        return (
          <View>
            <FlatList
              data={fruits}
              renderItem={renderItem}
              keyExtractor={item => item.id} />
          </View>
      
      
        );
      }
