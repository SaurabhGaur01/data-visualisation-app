import {
  getTransformedResponse,
  getConstructionMaterialMatrix,
  getAreaSizeMatrix,
  getFilteredDataset,
} from "../../utils/transformedUtils";

describe("getTransformedResponse function test", () => {
  it("should return transformedResponse from actual response from API", () => {
    const categoryData = [
      {
        id: 1,
        properties: {
          type: "mockType",
          material: "mockMaterial",
          area_: 150.25,
          status: "mockStatus",
          asset_numb: "mockAsset",
          owner: "mockOwner",
        },
      },
      {
        id: 2,
        properties: {
          type: "mockType",
          material: "mockMaterial",
          area_: 150.25,
          status: "mockStatus",
          asset_numb: "mockAsset",
          owner: "mockOwner",
        },
      },
    ];

    const transformedResponse = [
      {
        rowID: 1,
        type: "mockType",
        material: "mockMaterial",
        area: 150.25,
        status: "mockStatus",
        assetNumb: "mockAsset",
        owner: "mockOwner",
      },
      {
        rowID: 2,
        type: "mockType",
        material: "mockMaterial",
        area: 150.25,
        status: "mockStatus",
        assetNumb: "mockAsset",
        owner: "mockOwner",
      },
    ];

    expect(getTransformedResponse(categoryData)).toEqual(transformedResponse);
  });
});

describe("getConstructionMaterialMatrix function test", () => {
  it("should return the construction matrix based on material", () => {
    const recievedData = [
      {
        rowID: 1,
        type: "mockType",
        material: "mockMaterial",
        area: 150.25,
        status: "mockStatus",
        assetNumb: "mockAsset",
        owner: "mockOwner",
      },
      {
        rowID: 2,
        type: "mockType",
        material: "mockMaterial",
        area: 150.25,
        status: "mockStatus",
        assetNumb: "mockAsset",
        owner: "mockOwner",
      },
      {
        rowID: 3,
        type: "mockType",
        material: "mockMaterial_2",
        area: 150.25,
        status: "mockStatus",
        assetNumb: "mockAsset",
        owner: "mockOwner",
      },
    ];

    const returnedMatrix = {
      mockMaterial: 2,
      mockMaterial_2: 1,
    };

    expect(getConstructionMaterialMatrix(recievedData)).toEqual(returnedMatrix);
  });
});

describe("getAreaSizeMatrix function test", () => {
  it("should return the area matrix based on size", () => {
    const recievedData = [
      {
        rowID: 1,
        type: "mockType",
        material: "mockMaterial",
        area: 150.25,
        status: "mockStatus",
        assetNumb: "mockAsset",
        owner: "mockOwner",
      },
      {
        rowID: 2,
        type: "mockType",
        material: "mockMaterial",
        area: 40.67,
        status: "mockStatus",
        assetNumb: "mockAsset",
        owner: "mockOwner",
      },
      {
        rowID: 3,
        type: "mockType",
        material: "mockMaterial_2",
        area: 250.78,
        status: "mockStatus",
        assetNumb: "mockAsset",
        owner: "mockOwner",
      },
    ];

    const returnedMatrix = {
      "[0, 50]": 1,
      "[50, 200]": 1,
      "[200, 526]": 1,
    };

    expect(getAreaSizeMatrix(recievedData)).toEqual(returnedMatrix);
  });
});

describe("getFilteredDataset function test", () => {
  it("should return the area matrix based on size", () => {
    const features = [
      {
        rowID: 1,
        type: "mockType",
        material: "mockMaterial",
        area: 150.25,
        status: "mockStatus",
        assetNumb: "mockAsset",
        owner: "mockOwner",
      },
      {
        rowID: 2,
        type: "mockType",
        material: "mockMaterial_1",
        area: 40.67,
        status: "mockStatus",
        assetNumb: "mockAsset",
        owner: "mockOwner",
      },
      {
        rowID: 3,
        type: "mockType",
        material: "mockMaterial_2",
        area: 250.78,
        status: "mockStatus",
        assetNumb: "mockAsset",
        owner: "mockOwner",
      },
    ];

    const returnedFEatures = [
      {
        rowID: 1,
        type: "mockType",
        material: "mockMaterial",
        area: 150.25,
        status: "mockStatus",
        assetNumb: "mockAsset",
        owner: "mockOwner",
      },
    ];

    expect(
      getFilteredDataset(features, "construction", "mockMaterial")
    ).toEqual(returnedFEatures);
  });
});
