import React, { useState } from "react";

// const getManagement = (info: string) => {
//   switch (info) {
//     case "cameras":
//       return camerasManagement.cameras;
//     case "counting stations":
//       return countingStationsManagement.countingStations;
//     case "stores":
//       return wallsManagement.all.filter((b) => b.wall_type === "CELL");
//     case "gates":
//       return wallsManagement.all.filter((b) => b.wall_type === "GATE");
//     case "screens":
//       return wallsManagement.all.filter(
//         (b) =>
//           b.wall_type === "SCREEN_DYNAMIC" || b.wall_type === "SCREEN_STATIC"
//       );
//     case "kiosks":
//       return wallsManagement.all.filter((b) => b.wall_type === "KIOSK");
//     case "road shows":
//       return wallsManagement.all.filter((b) => b.wall_type === "ROADSHOW");
//     case "zones":
//       return areasManagement.all;
//     case "obstacles":
//       return wallsManagement.all.filter(
//         (b) =>
//           b.wall_type === "OBSTACLE_OCCLUDING" ||
//           b.wall_type === "OBSTACLE_TRANSPARENT"
//       );
//     case "checkpoints":
//       return wallsManagement.all.filter((b) => b.wall_type === "CHECKPOINT");
//     case "interfloors":
//       return wallsManagement.all.filter((b) => b.wall_type === "ESCALATOR");
//     case "virtual streams":
//       return virtualStreamsManagement.allVirtualStreams;
//     default:
//       return null;
//   }
// };

export enum Management {
  Cameras = "cameras",
  CountingStations = "counting stations",
  Stories = "stores",
  Gates = "gates",
}

const management = {
  [Management.Cameras]: "camerasManagement.cameras",
  [Management.CountingStations]: "countingStationsManagement.countingStations",
  [Management.Stories]:
    "wallsManagement.all.filter((b) => b.wall_type === CELL);",
  [Management.Gates]:
    "wallsManagement.all.filter((b) => b.wall_type === GATE);",
};

const ExampleWithSwitch: React.FC = () => {
  const [selectedCategories, setSelectedCategories] =
    useState<Management>(null);

  const handleSelectedCategoriesChange = (category: Management) => () => {
    setSelectedCategories(category);
  };

  console.log(management[selectedCategories]);

  return (
    <div>
      {selectedCategories}
      <div onClick={handleSelectedCategoriesChange(Management.Cameras)}>
        {Management.Cameras}
      </div>
      <div
        onClick={handleSelectedCategoriesChange(Management.CountingStations)}
      >
        {Management.CountingStations}
      </div>
      <div onClick={handleSelectedCategoriesChange(Management.Stories)}>
        {Management.Stories}
      </div>
    </div>
  );
};

export default ExampleWithSwitch;
