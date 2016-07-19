import React from 'react'
import { Route } from 'react-router'
import HomeContainer from 'containers/HomeContainer/HomeContainer'

const ROOT_PATH = "/"

export const homeRoutes = {
    path: ROOT_PATH,
    component: HomeContainer,
    childRoutes: []
};

export default homeRoutes;