import React from 'react';

//Api
import * as api from './api';

//VM
import { Racion, createEmptyRacion } from './racion.vm';

//Mapper
import { mapRacionesListFromApiToVm, mapRacionFromVmToApi } from './raciones-list.mapper';

//Componente
import { RacionesListComponent } from './raciones-list.component';

//Metodo
import { reorder } from 'common/utils/array';

export const RacionesListContainer: React.FunctionComponent = () => {
  const [raciones, setRaciones] = React.useState<Racion[]>([createEmptyRacion()]);
  const [editRacionId, setEditRacionId] = React.useState<number | false>(false);

  React.useEffect(() => {
    onLoadRaciones();
  }, []);

  const onLoadRaciones = async () => {
    api
      .getRacionesList()
      .then((result) => {
        setRaciones(mapRacionesListFromApiToVm(result));
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to load raciones list');
      });
  };

  const handleReorder = (startIndex: number, endIndex: number) =>
    setRaciones(reorder(raciones, startIndex, endIndex));

  const handleSave = (value: string, id: number) => {
    const newRacionAPI = mapRacionFromVmToApi({ id, value });

    api
      .saveRacion(newRacionAPI)
      .then((result) => {
        // Snackbar
        alert('Saved racion');
        setEditRacionId(false);
        const index = raciones.findIndex((racion) => racion.id === id);
        if (index !== -1) {
          const newArray = [...raciones];
          newArray[index].value = value;
          console.log(newArray);
          setRaciones(newArray);
        } else {
          setRaciones([...raciones, { id, value }]);
        }
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to saved racion');
      });
  };

  const handleDelete = (id: number) => {
    api
      .deleteRacion(id)
      .then((result) => {
        // Snackbar
        alert('Deleted racion');
        setEditRacionId(false);
        const newArray = raciones.filter((racion) => racion.id !== id);
        setRaciones(newArray);
      })

      .catch((error) => {
        // Snackbar error
        alert('Error to deleted racion');
      });
  };

  const handleEdit = (id: number) => {
    setEditRacionId(id);
  };

  const handleCancel = () => setEditRacionId(false);
  const handleAdd = () => setEditRacionId(0);

  return (
    <RacionesListComponent
      raciones={raciones}
      editID={editRacionId}
      onSave={handleSave}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onCancel={handleCancel}
      onAdd={handleAdd}
      onReorder={handleReorder}
    />
  );
};
