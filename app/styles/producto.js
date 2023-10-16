import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 10,
  },
  header: {
    width: 300,
    height: 62,
    backgroundColor: '#F8F9FA',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowRadius: 34,
    shadowOpacity: 0.6,
    marginBottom: 30,
  },
  headerText: {

    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    position: 'absolute',
    left: 70,
    top: 20,
  },
  Icono: {
    position: 'absolute',
    width: 60,
    height: 65,
    left: 10,
  },
  clearButton: {
    position: 'absolute',
    width: 60,
    height: 65,
    left: 10,
    fontSize: 18,
    color: 'red',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
    position: 'absolute',
    width: 60,
    height: 65,
    left: 260,
  },
  productContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  productName: {

    fontFamily: 'Poppins-SemiBold',

    fontSize: 14,
    marginTop: 4,
  },
  productPrice: {

    fontFamily: 'Poppins-SemiBold',

    fontSize: 14,
    color: '#00000',
    marginTop: 4,
  },
  productDescription: {

    fontFamily: 'Poppins-Regular',

    fontSize: 14,
    marginTop: 4,
  },
  addToCartButton: {
    padding: 5,
    marginTop: 8,
  },
  removeFromCartButton: {
    padding: 5,
    marginTop: 8,
  },
  productDetails: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
  },
});
