export const text = {
  fontSize: 18,
  lineHeight: 22,
  fontFamily: 'Avenir Book'
};

export const textBlue = {
  ...text,
  color: 'rgb(95, 237, 230)'
};

export const textBold = {
  ...text,
  fontWeight: 'bold'
};

export const textThin = {
  ...text,
  fontWeight: '200',
  fontSize: 13,
  color: '#3E3E3E',
  marginTop: 5
};

export const button = {
  marginLeft: 10,
  marginRight: 10,
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 5,
  paddingBottom: 5,
  shadowColor: "#000000",
  shadowOpacity: 0.3,
  shadowRadius: 3,
  shadowOffset: {
    height: 3,
    width: 0
  },
  alignItems: 'center',
};
