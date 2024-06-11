import React from "react";

import ScreenSaver from "../../../../components/ScreenSaver";

function ScreenSaverExercise({ params }) {
  const { colorId } = params;
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={colorId} />
    </main>
  );
}

export default ScreenSaverExercise;
