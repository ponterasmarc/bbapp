import AdminLayout from "@/components/layout/AdminLayout";
import { getUser } from "@/store/actions/userActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Paper, PanelFlex, SectionTitle } from "@/components/utils/styled";
import Loading from "@/components/loading";
import ErrorComponent from "@/components/error";
import {
  UserImg,
  UserDetailsWrap,
  UserView,
  FieldWrap,
  Label,
  Data,
  FlexDiv,
  Col,
  UserPosition,
  UserName,
} from "./styled";
import { PUT_USER_RESET } from "@/store/constants/userConstants";
import SampleTable from "@/components/utils/SampleTable";

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { userId } = router.query;
  const { loading, user, error } = useSelector((state) => state.getUser);

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
  }, []);

  return (
    <AdminLayout>
      <UserView>
        {loading ? (
          <Loading />
        ) : user ? (
          <>
            <UserDetailsWrap>
              <FlexDiv>
                <Label>
                  <UserImg src={user.image} />
                </Label>
                <Col>
                  <UserName>{user.name ? user.name : "None"}</UserName>
                  <UserPosition>
                    {user.role ? user.role.name : "None"}
                  </UserPosition>
                </Col>
              </FlexDiv>

              <FieldWrap>
                <Label>birthdate:</Label>
                <Data>{user.birthDate ? user.birthDate : "None"}</Data>
              </FieldWrap>
              <FieldWrap>
                <Label>Age:</Label>
                <Data>{user.age ? user.age : "None"}</Data>
              </FieldWrap>
              <FieldWrap>
                <Label>Gender:</Label>
                <Data>{user.gender ? user.gender : "None"}</Data>
              </FieldWrap>
              <FieldWrap>
                <Label>Email:</Label>
                <Data>{user.email ? user.email : "None"}</Data>
              </FieldWrap>
              <FieldWrap>
                <Label>Phone:</Label>
                <Data>{user.phone ? user.phone : "None"}</Data>
              </FieldWrap>
              <button
                onClick={() => {
                  router.push(`${user._id}/edit`);
                  dispatch({
                    type: PUT_USER_RESET,
                  });
                }}
              >
                Edit user
              </button>
            </UserDetailsWrap>
          </>
        ) : error ? (
          <ErrorComponent />
        ) : (
          "None"
        )}
        <Paper>
          <SectionTitle>Bucket</SectionTitle>
          <SampleTable />
        </Paper>
      </UserView>
      <PanelFlex>
        <Paper>
          <SectionTitle>Completed Tasks</SectionTitle>
          <SampleTable />
        </Paper>
        <Paper>
          <SectionTitle>One Time Approve</SectionTitle>
          <SampleTable />
        </Paper>
      </PanelFlex>
    </AdminLayout>
  );
};

export default User;
