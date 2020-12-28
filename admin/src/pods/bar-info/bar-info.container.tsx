import React from 'react';

//Api
import * as api from './api';

//Router
import { useHistory } from 'react-router-dom';

//VM
import { BarInfo, createEmptyBarInfo } from './bar-info.vm';

//Mapper
import { mapBarInfoFromApiToVm } from './bar-info.mappers';

//Components
import { BarInfoComponent } from './bar-info.component';

export const BarInfoContainer: React.FunctionComponent = () => {
  const history = useHistory();
  const [barInfo, setbarInfo] = React.useState<BarInfo>(createEmptyBarInfo());

  React.useEffect(() => {
    onLoadInfoBar();
  }, []);

  const onLoadInfoBar = async () => {
    api
      .getBarInfo()
      .then((result) => {
        setbarInfo(mapBarInfoFromApiToVm(result));
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to load bar info');
      });
  };

  const handleSave = (barInfo: BarInfo) => {
    api
      .saveBarInfo(barInfo)
      .then((result) => {
        // Snackbar error
        alert('Updated Bar info');
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to update bar info');
      });
  };

  const handleCancel = () => {
    history.goBack();
  };
  return <BarInfoComponent info={barInfo} onSave={handleSave} onCancel={handleCancel} />;
};
