import React from 'react';

//Api
import * as api from './api';

import { RacionesListComponent } from './raciones-list.component';

//Mapper
import { mapRacionesListFromApiToVm, mapRacionFromVmToApi } from './raciones-list.mapper';

import { Racion, createEmptyRacion } from './racion.vm';

import { reorder } from 'common/utils/array';
export const RacionesListContainer: React.FunctionComponent = () => {
  const [raciones, setRaciones] = React.useState<Racion[]>([createEmptyRacion()]);
  const [editCategoryId, setEditCategoryId] = React.useState<number | false>(false);

  /*const getCategories = async () => {
    const menuCategories = await getMenuCategories();
    setCategories(mapMenuCategoriesToListItems(menuCategories));
  };*/

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
        alert('Error to load bar info');
      });
  };

  const handleSave = (value: string, id: number) => {
    const newRacionAPI = mapRacionFromVmToApi({ id, value });

    api
      .saveRacion(newRacionAPI)
      .then((result) => {
        // Snackbar
        alert('Saved racion');
        setEditCategoryId(false);
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
        alert('Error to save racion');
      });
  };

  const handleReorder = (startIndex: number, endIndex: number) =>
    setRaciones(reorder(raciones, startIndex, endIndex));

  const handleDelete = (id: number) => {
    api
      .deleteRacion(id)
      .then((result) => {
        // Snackbar
        alert('Deleted racion');
        setEditCategoryId(false);
        const newArray = raciones.filter((racion) => racion.id !== id);
        setRaciones(newArray);
      })

      .catch((error) => {
        // Snackbar error
        alert('Error to deleted racion');
      });
  };

  const handleEdit = (id: number) => {
    setEditCategoryId(id);
  };

  const handleCancel = () => setEditCategoryId(false);
  const handleAdd = () => setEditCategoryId(0);

  return (
    <RacionesListComponent
      raciones={raciones}
      editID={editCategoryId}
      onSave={handleSave}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onCancel={handleCancel}
      onAdd={handleAdd}
      onReorder={handleReorder}
    />
  );
};
