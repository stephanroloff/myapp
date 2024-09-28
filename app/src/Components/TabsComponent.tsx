import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from 'react-i18next';
import React from "react";

type TabsComponentProps = {
  tabsProps: {
    tabTriggerArray: string;
    TabContentArray: JSX.Element;
  }[]
}

const TabsComponent: React.FC<TabsComponentProps> = ({ tabsProps }) => {
  const { t } = useTranslation();

  return (
    <Tabs defaultValue={t(`${tabsProps[0].tabTriggerArray.toLowerCase()}`)} className="max-w-[550px]">
      <TabsList className="w-full">
        {tabsProps.map((tabsProp, index) => (
          <TabsTrigger
            key={index}
            className="w-full"
            value={t(`${tabsProp.tabTriggerArray.toLowerCase()}`)}
          >
            {t(`general.${tabsProp.tabTriggerArray.toLowerCase()}`)}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsProps.map((tabsProp, index) => (
        <TabsContent
          key={index}
          value={t(`${tabsProp.tabTriggerArray.toLowerCase()}`)}
        >
          {tabsProp.TabContentArray}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsComponent;