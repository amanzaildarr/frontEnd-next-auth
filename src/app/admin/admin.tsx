
import ApiService from '@/lib/api.service';
import { getSession, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import ApiRoutes from '../api/enums/api.routes.enums';
import { AxiosResponse } from 'axios';
import { User } from '../api/response/user/user.response';

export default function AdminPage() {
    const { data: session } = useSession();
    const [result, setResult] = useState<User>()
    const apiService = new ApiService(session?.accessToken)
    useEffect(() => {
        async function getUserDetails() {
            if (session?.user?._id) {
                const response: AxiosResponse<User> = await apiService.get<User>(ApiRoutes.GetOneUser + session?.user._id)
                setResult(response.data)
            }
            return
        }
        getUserDetails()
    }, [])
    return (
        <>
            <div>Admin page</div>
            <br />
            <br />
            <p>
                {JSON.stringify(session?.user)}
            </p>
            <br />
            <br />
            {/* {JSON.stringify(session?.User)} */}
            <br />
            <br />
            <p>Result:</p>
            <p>
                {JSON.stringify(result)}
            </p>
            {/* {JSON.stringify(session2)} */}
        </>
    )
}
