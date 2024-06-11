import React from "react";

import Link from "next/link";

const COLORS = ["red", "green", "blue", "yellow", "purple", "orange"];

function ScreenSaverExercise() {
  return (
    <main>
      Choose the color:
      <ul>
        {COLORS.map((color) => (
          <Link href={`01-screensaver/${color}`} key={color}>
            <li>{color}</li>
          </Link>
        ))}
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
