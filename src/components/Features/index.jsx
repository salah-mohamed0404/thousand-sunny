import { memo } from "react";
import FeatureItem from "./FeatureItem";
import features from "./features";
import FeaturesContainer from "./FeaturesContainer";

const Features = () => {
  return (
    <FeaturesContainer>
      {features.map(({ Icon, title, description }) => (
        <FeatureItem Icon={Icon} title={title} description={description} />
      ))}
    </FeaturesContainer>
  );
};

export default memo(Features);
