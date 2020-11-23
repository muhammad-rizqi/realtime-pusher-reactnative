import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors} from './color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  row: {
    flexDirection: 'row',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  companyImage: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  form: {
    width: 325,
  },
  title: {
    color: colors.textLight,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 8,
    backgroundColor: colors.input,
    marginVertical: 8,
  },
  inputText: {
    color: 'white',
  },
  textWhite: {
    color: colors.textLight,
  },
  button: {
    backgroundColor: colors.button,
    height: 48,
    borderRadius: 30,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: colors.textButton,
    textAlign: 'center',
  },
  center: {
    alignItems: 'center',
  },

  pageContainer: {
    padding: 8,
    width: 350,
  },
  card: {
    backgroundColor: colors.secondary,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    marginVertical: 4,
  },
  headerBar: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    margin: 16,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  icon: {
    width: 20,
    height: 20,
    margin: 4,
    tintColor: colors.icon,
  },
  input: {
    flex: 1,
    color: colors.textLight,
    paddingVertical: 0,
    marginLeft: 8,
  },
  statusCommand: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.input,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
  },
  buttonSend: {
    backgroundColor: colors.button,
    padding: 8,
    borderRadius: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  statusName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textLight,
  },
  statusButtonGroup: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginTop: 8,
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  incomingMessage: {
    backgroundColor: colors.secondary,
    alignSelf: 'flex-start',
  },

  messageItem: {
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    marginVertical: 4,
    minWidth: '40%',
    maxWidth: '80%',
    position: 'relative',
    paddingBottom: 12,
  },
  outgoingMessage: {
    backgroundColor: colors.button,
    alignSelf: 'flex-end',
  },

  composeMessage: {
    backgroundColor: colors.secondary,
    margin: 4,
    minHeight: 40,
    maxHeight: 150,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
  },
  messageTime: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    fontSize: 10,
  },
  appBar: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: colors.secondary,
    width: '100%',
    alignItems: 'center',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  appBarText: {
    flex: 1,
    marginHorizontal: 16,
  },
  appBarTitle: {
    color: colors.textLight,
    fontSize: 18,
  },
  appBarDesc: {
    fontSize: 10,
    color: colors.textLight,
  },
});
