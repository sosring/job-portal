import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native-web";
import {
  Stack,
  useRouter,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import { useState, useCallback } from "react";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics
} from "../../components";
import { COLORS, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const JobDetails = () => {
  const local = useLocalSearchParams();
  const router = useRouter()

  return (
    <Text>Hallo</Text>
  ) 
};

export default JobDetails;
