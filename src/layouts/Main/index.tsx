import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '@/router';
import { useDispatch } from 'react-redux';
import { getDisplayLayout } from '@/store/selectors/layout';
import { compareTwoObject } from '@/utils';
import { setDisplayLayout } from '@/store/actions/layout';
import { ILayout } from '@/store/types/layout';
import { useShallowEqualSelector } from '@/hooks/useShallowEqualSelector';

const Main: React.FC = () => {
  const layout: ILayout = useShallowEqualSelector(getDisplayLayout);
  const dispatch = useDispatch();

  const updateDisplayLayout = (currentLayout: ILayout, layout: ILayout) => {
    const layoutUpdated = currentLayout
      ? { header: !!currentLayout.header, footer: !!currentLayout.footer }
      : { header: true, footer: true };

    if (!compareTwoObject(layoutUpdated, layout)) {
      setTimeout(() => dispatch(setDisplayLayout(layoutUpdated)));
    }
  };

  return (
    <div id="main" className="container">
      <Switch>
        {routes.map(
          ({
            component: Component,
            path,
            layout: currentLayout,
            ...rest
          }: {
            component: any;
            path: string;
            layout: object;
          }) => {
            return (
              <Route
                key={path}
                path={path}
                render={props => {
                  updateDisplayLayout(currentLayout, layout);
                  return <Component {...props} />;
                }}
                {...rest}
              />
            );
          },
        )}
      </Switch>
    </div>
  );
};

export default Main;
