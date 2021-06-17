import {
  FILTER_BY_CONSTRUCTION_MATERIAL,
  FILTER_BY_AREA_SIZE_50,
  FILTER_BY_AREA_SIZE_200,
} from "../constants/filterOptions";

export const getTransformedResponse = (features) => {
  const transformedResponse = [];
  features.forEach(({ id: rowID, properties }) => {
    const { type, material, area_, status, asset_numb, owner } = properties;
    transformedResponse.push({
      rowID,
      type,
      material,
      area: area_,
      status,
      assetNumb: asset_numb,
      owner,
    });
  });
  return transformedResponse;
};

export const getConstructionMaterialMatrix = (data) => {
  var constructionMaterialMatrix = {};
  data.forEach((obj) => {
    constructionMaterialMatrix[obj.material] =
      (constructionMaterialMatrix[obj.material] || 0) + 1;
  });
  return constructionMaterialMatrix;
};

export const getAreaSizeMatrix = (data) => {
  return {
    "[0, 50]": getFirstRangeData(data).length,
    "[50, 200]": getSecondRangeData(data).length,
    "[200, 526]": getThirdRangeData(data).length,
  };
};

export const getFirstRangeData = (data) =>
  data.filter(({ area }) => area >= 0 && area <= 50);

export const getSecondRangeData = (data) =>
  data.filter(({ area }) => area > 50 && area < 200);

export const getThirdRangeData = (data) =>
  data.filter(({ area }) => area >= 200);

export const getFilteredDataset = (features, filterBy, dataset) => {
  let filteredDataset = [];
  if (filterBy === FILTER_BY_CONSTRUCTION_MATERIAL) {
    filteredDataset = features.filter(({ material }) => material === dataset);
  } else {
    if (dataset === FILTER_BY_AREA_SIZE_50) {
      filteredDataset = getFirstRangeData(features);
    } else if (dataset === FILTER_BY_AREA_SIZE_200) {
      filteredDataset = getSecondRangeData(features);
    } else {
      filteredDataset = getThirdRangeData(features);
    }
  }
  return filteredDataset;
};
