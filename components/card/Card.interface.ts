export default interface CardI {
  id: string;
  image: string;
  name: string;
  description: string;
  price: {
    currency: string;
    amount: number;
  };
  discount: {
    oldAmount: number;
    discountAmount: string;
  };
  shipping: {
    name: string;
    logo: string;
  };
  rate: {
    totalStars: string;
    totalPeopleRates: string;
  };
  coupon: string;
}
