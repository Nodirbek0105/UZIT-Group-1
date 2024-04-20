import React from "react";
import style from "./Tarrifs.module.scss";
import Accordion from "../../components/FAQ/Accordions";
import { useTranslation } from "react-i18next";
import WebDesign from "../../components/WebDesign/WebDesign";
import { OrbitControls, Stage } from "@react-three/drei";
import Question from "../../components/Question";
import { Canvas } from "@react-three/fiber";
import animationTariffs from "../../animations/message.mp4";

export default function TarrifsPage() {
  const { t } = useTranslation();
  return (
    <div className={style.tarrifs}>
      <div>
        <Accordion title={t("FAQ.mainTitle1")} answer={t("FAQ.answer1")} />
        <Accordion title={t("FAQ.mainTitle2")} answer={t("FAQ.answer2")} />
        <Accordion title={t("FAQ.mainTitle3")} answer={t("FAQ.answer3")} />
        <Accordion title={t("FAQ.mainTitle4")} answer={t("FAQ.answer4")} />
        <Accordion title={t("FAQ.mainTitle5")} answer={t("FAQ.answer5")} />
        
      </div>
      <div>
        <video className={style.animation} autoPlay={true} playsInline={true} muted={true} loop>
          <source src={animationTariffs} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
    </div>
  );
}
