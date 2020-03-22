import React from "react";

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

	return {
		x: centerX + (radius * Math.cos(angleInRadians)),
		y: centerY + (radius * Math.sin(angleInRadians))
	};
}

export default function({ 
    id,
    cx,
    cy,
    radius,
    thickness,
    name, 
    fill,
    opts
  }) {
    const cutout_radius = radius - thickness;
    const largeArcFlag = opts.endAngle - opts.startAngle <= 180 ? "0" : "1";


    const start1 = polarToCartesian(cx, cy, radius, opts.endAngle);
    const end1 = polarToCartesian(cx, cy, radius, opts.startAngle);
    
    const start2 = polarToCartesian(cx, cy, cutout_radius, opts.endAngle);
    const end2 = polarToCartesian(cx, cy, cutout_radius, opts.startAngle);
    

    const d = [      
      "M", start1.x, start1.y,
      "A", radius, radius, 0, largeArcFlag, 0, end1.x, end1.y,
      "L", cx, cy,
      "Z",
      
      
      "M", start2.x, start2.y,
      "A", cutout_radius, cutout_radius, 0, largeArcFlag, 0, end2.x, end2.y,
      "L", cx, cy,
      "Z"
    ].join(" ");
  
  return (
    <path
        className={`path-${id}`}
        name={name}
        fill={fill}
        fillRule="evenodd"
        d={d}
    />
  );
}
