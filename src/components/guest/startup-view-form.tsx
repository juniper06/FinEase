"use client";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { Separator } from "@/components/ui/separator";
import {
  BriefcaseBusiness,
  Building,
  Code,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { getStartup, Startup } from "@/actions/ceo/startup.action";
import TotalSales from "../ceo/graphs/total-sales";
import TotalExpenses from "../ceo/graphs/total-expenses";
import TotalCustomer from "../ceo/graphs/total-customer";
import TotalItems from "../ceo/graphs/total-item";
import { TotalGraph } from "../ceo/graphs/sales-expenses";
import RecentSalesTable from "../ceo/graphs/recent-sales-table";
import RecentExpensesTable from "../ceo/graphs/recent-expenses-table";
import { FinancialForecasting } from "../ceo/graphs/financial-forecasting";

type Props = {
  id: string;
};

export const GuestViewStartup = ({ id }: Props) => {
  const [startup, setStartup] = useState<Startup | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchStartup = async () => {
      try {
        setLoading(true);
        const data = await getStartup(id);
        if (data.error) {
          toast({
            title: "Error",
            description: data.error,
            variant: "destructive",
          });
        } else {
          setStartup(data);
        }
      } catch (error) {
        console.error("Failed to fetch startup", error);
        toast({
          title: "Error",
          description: "Failed to fetch startup. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStartup();
  }, [id, toast]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!startup) {
    return <div>Startup not found.</div>;
  }

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-lg font-semibold md:text-2xl w-full mb-5">
          {startup.companyName}
        </h1>
        <Separator />
        <div className="flex gap-7 my-5">
          <div className="w-[600px] bg-primary-foreground flex flex-col gap-4 px-3 py-5">
            <div className="flex justify-center items-center">
              <div>
                <User className="mr-10" />
              </div>
              <div className="w-full">
                <h5 className="font-semibold text-[25px]">
                  {startup.ceo.firstName} {startup.ceo.lastName}
                </h5>
                <span className="font-extralight text-primary">
                  Chief Executive Officer
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <BriefcaseBusiness className="mr-10" />
              </div>
              <div className="w-full">
                <h5 className="font-semibold text-[25px] text-primary">
                  {startup.companyName}
                </h5>
                <span className="font-extralight">
                  {startup.companyDescription}
                </span>
              </div>
            </div>
            <Separator />
            <div className="flex justify-center items-center">
              <div>
                <Building className="mr-10" />
              </div>
              <div className="w-full">
                <h2 className="text-foreground">
                  <div>Startup Industry</div>
                </h2>
                <span className="text-primary ">{startup.industry}</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <Mail className="mr-10" />
              </div>
              <div className="w-full">
                <h2 className="text-foreground">
                  <div>Contact Email</div>
                </h2>
                <span className="text-primary ">{startup.contactEmail}</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <Phone className="mr-10" />
              </div>
              <div className="w-full">
                <h2 className="text-foreground">
                  <div>Contact Number</div>
                </h2>
                <span className="text-primary ">{startup.phoneNumber}</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <MapPin className="mr-10" />
              </div>
              <div className="w-full">
                <h2 className="text-foreground">
                  <div>Location Address</div>
                </h2>
                <span className="text-primary ">{startup.locationName}</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="md:text-[25px]">Chief Financial Officers</h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {startup.cfo ? (
                  <TableRow>
                    <TableCell>
                      {startup.cfo.firstName} {startup.cfo.lastName}
                    </TableCell>
                    <TableCell>{startup.cfo.email}</TableCell>
                  </TableRow>
                ) : (
                  <TableRow>
                    <TableCell colSpan={2}>No CFO assigned</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <TotalSales startupId={startup.id} />
        <TotalExpenses startupId={startup.id} />
        <TotalCustomer startupId={startup.id} />
        <TotalItems startupId={startup.id} />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-5">
        {/* <FinancialForecasting startupId={startup.id} /> */}
        <TotalGraph startupId={startup.id} />
        {/* <RecentSalesTable startupId={startup.id} />
        <RecentExpensesTable startupId={startup.id}/> */}
      </div>
    </div>
  );
};
