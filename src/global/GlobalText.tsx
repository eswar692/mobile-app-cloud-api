import { Text, useColorScheme } from 'react-native';

type Props = {
    children: React.ReactNode;
    style?: object;
    [key: string]: any;
}
const GlobalText = ({children,style, ...props}: Props) => {
    const colorScheme = useColorScheme();
    const color = colorScheme === 'dark' ? '#ffffff' : '#000';
  return (
    <Text {...props} style={[{  color, }, style]}>
      {children}
    </Text> 
  )
}

export default GlobalText