import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Clock, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TimelineEvent {
  title: string;
  description: string;
  date: string;
  finished: boolean;
  finishedSuccessfully: boolean;
}

interface TimelineItemProps extends TimelineEvent {
  isLast: boolean;
}

type TimeLineProps = {
  events: TimelineEvent[] | undefined;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, date, finished, finishedSuccessfully, isLast }) => (
  <div className="flex items-start">
    <div className="flex flex-col items-center mr-4">
      <div className="relative">
        <div className={`z-10 rounded-full p-2 
            ${finished ? 
                finishedSuccessfully?
                ('bg-green-500')
                :
                ('bg-red-600')
            : 
            'bg-gray-300'
            }`}
        >
          {finished ? (
            finishedSuccessfully?
            (<Check className="h-5 w-5 text-white" />)
            :
            (<X className="h-5 w-5 text-white" />)
          ) : (
            <Clock className="h-5 w-5 text-gray-600" />
          )}
        </div>
      </div>
      {!isLast && <div className="w-0.5 bg-gray-300 h-full mt-2" />}
    </div>
    <div className="flex-grow pb-8">
      <div className="text-sm font-medium text-gray-500 dark:text-white mb-4">{date}</div>
      <Card className='dark:bg-cardGray border-2 border-customGraySoft dark:border-customGray'>
        <CardHeader className="p-4">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </div>
  </div>
);

const Timeline = ({events}: TimeLineProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-full p-10 bg-white dark:bg-cardGray border-cardGraySoft rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">{t(`timeline.title`)}</h2>
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gray-700" />
        {events?.map((event, index) => (
          <TimelineItem 
            key={index} 
            {...event} 
            isLast={index === events.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;