import { NavLink } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  // BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react";
import { useTranslation } from "react-i18next";

type BreadcrumbProps = {
  parts: string[];
}

const BreadcrumbComponent = ({parts}:BreadcrumbProps) => {
  const { t } = useTranslation();
  
  return (
    <>
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
            <NavLink to="/">{t(`sidebar.home`)}</NavLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        {parts.map((part,index) =>{

          console.log('Length', parts.length);
          console.log('index', index);

          if((index+1) == parts.length){
            return(
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbPage>{t(`sidebar.${part.toLowerCase()}`)}</BreadcrumbPage>
                </BreadcrumbItem>
              </React.Fragment>
            )
          }else{
            return(
              <React.Fragment key={index}>
                <BreadcrumbItem>
                    <NavLink to={`/${part}`}>{t(`sidebar.${part.toLowerCase()}`)}</NavLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            )
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
    </>
  )
}

export default BreadcrumbComponent;
