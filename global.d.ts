type RootStackParamList = {
  Splash: undefined;
  MainTab: undefined;
};

type MainTabParamList = {
  Home: undefined;
  Location: undefined;
  Info: undefined;
};

type HomeStackParamList = {
  HomeScreen: undefined;
};

type LocationStackParamList = {
  LocationScreen: undefined;
};

type InfoStackParamList = {
  InfoScreen: undefined;
};

type DataCuaca = {
  $: {
    id: string;
    latitude: string;
    longitude: string;
    description: string;
    domain: string;
  };
  parameter: {
    timerange: {
      $: {
        type: string;
        datetime: string;
      };
      value: {
        _: string;
        $: {
          unit: string;
        };
      }[];
    }[];
  }[];
};

type ParameterCuaca = {
  timerange: {
    $: {
      type: string;
      datetime: string;
    };
    value: {
      _: string;
      $: {
        unit: string;
      };
    }[];
  }[];
};

type DataSuhuCuaca = {
  waktu: string;
  suhu: string;
  gambar: string;
};

type DataCuacaHTTPResponse = {
  data: DataCuaca[];
  status: number;
  message: string;
};

type CuacaState = {
  date: string;
  time: string;
  dateList: {
    formatted: string;
    raw: string;
  }[];
  dataCuaca: DataCuaca[];
  dataSuhuCuaca: DataSuhuCuaca[];
  cuacaSaatIni: DataSuhuCuaca;
  isLoading: {
    fetchCuaca: boolean;
  };
  isError: {
    fetchCuaca: boolean;
  };
  isSuccess: {
    fetchCuaca: boolean;
  };
};

type DataProvinsi = {
  id: string;
  name: string;
};

type DataProvinsiHTTPResponse = {
  data: DataProvinsi[];
  status: number;
  message: string;
};

type LokasiState = {
  userLocation: {
    kota: string;
    provinsi: string;
    id: string;
  };
  listKota: DataCuaca[];
  listProvinsi: DataProvinsi[];
  isLoading: {
    fetchProvinsi: boolean;
    fetchKota: boolean;
  };
  isError: {
    fetchProvinsi: boolean;
    fetchKota: boolean;
  };
  isSuccess: {
    fetchProvinsi: boolean;
    fetchKota: boolean;
  };
};
