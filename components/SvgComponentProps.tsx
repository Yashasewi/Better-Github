"use client";
import { useEffect, useState } from "react";

interface SvgComponentProps {
  url: string;
}

const SvgComponent: React.FC<SvgComponentProps> = ({ url }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(url);
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error("Error fetching SVG:", error);
      }
    };

    fetchSvg();
  }, [url]);

  return <div dangerouslySetInnerHTML={{ __html: svgContent ?? "" }} />;
};

export default SvgComponent;
