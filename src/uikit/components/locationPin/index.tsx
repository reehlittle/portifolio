import { Container } from './styles';
import { LocationPinProps } from '@app/models';

const LocationPin = ({ location }: LocationPinProps) => {
  return <Container>{location}</Container>;
};

export default LocationPin;
