import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import { useSelector } from "react-redux";

export default function Bookmark() {
  const BOOK_MARK_LIST = useSelector(state => state.BOOK_MARK_LIST);
  // const dispatch = useDispatch()
  const deleteBookmark = (book)=>{
    alert(JSON.stringify(book));
  }
  return (
    <>

    <SafeAreaView styles={styles.container} backgroundColor="#382a38">
      <Title style={{ color: "#f5f5f5", marginLeft: 150, paddingTop: 8 }}>
        {" "}
        BookMark{" "}
      </Title>
    </SafeAreaView>
      <Text>LIST OF BOOKS</Text>
      <Text>Total NUmber Of boooks in Bookmark : {BOOK_MARK_LIST.length}</Text>
      {
        BOOK_MARK_LIST.map((book,index)=>
        <View key={index}>
        <Text>{book.bookName}</Text>
        <Text>{book.bookId}</Text>
        <Text>{book.bookAuthor}</Text>
        <Text>{book.bookRating}</Text>
        <Text onPress={()=>deleteBookmark(book)}>Delete</Text>
        </View>
        )
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5b6467",
    color: "white",
  },
});
