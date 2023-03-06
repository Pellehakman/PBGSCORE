export type playerModel = {
  attributes?: any;
  id?: any;
  links?: any;
  relationships?: {
    assets?: any;
    matches?: {
      data?: any;
    };
  };
};

export type userModel = {
  pubgid: string;
  uid: string;
  pubgname: string;
  teams?: {
    name?: any;
  };
  favourites?: {
    name?: any;
  };
};
