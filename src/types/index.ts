export interface Place {
    place_id: string;
    name: string;
    address: string;
    location: {
      lat: number;
      lng: number;
    };
  }
  