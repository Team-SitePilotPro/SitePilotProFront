export interface ClientInterface {
  id: number;
  contact: string | undefined;
  email: string;
  phone: string | undefined;
  company: {
    name: string | undefined;
  };
  address: {
    street: string | undefined;
    city: string | undefined;
    zipcode: number | undefined;
  };
}
