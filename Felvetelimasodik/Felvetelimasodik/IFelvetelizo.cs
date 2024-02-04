using System;

namespace Felvételi
{
    internal interface IFelvetelizo
    {

        string OM_Azonosito { get; set; }
        string Neve { get; set; }
        string ErtesitesiCime { get; set; }
        string Email { get; set; }
        DateTime SzuletesiDatum { get; set; }
        int Matematika { get; set; }
        int Magyar { get; set; }

        String CSVSortAdVissza();

        void ModositCSVSorral(String csvString);
    }
}