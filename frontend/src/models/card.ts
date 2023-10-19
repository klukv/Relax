export interface contextSearch {
    title: string,
    type: string,
    setTitle: (value: string) => void;
    setType: (value: string) => void;
  }
export interface Icontent {
  content : string,
  address: string,
  score: number
}
export interface ICard {
  title: string
  content : string[],
}